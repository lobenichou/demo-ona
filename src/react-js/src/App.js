import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
import scrollama from 'scrollama';

const layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

const alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChapter: props.chapters[0]
        };
        // this.setState = this.setState.bind(this);
    }

    componentDidMount() {
        const config = this.props;

        mapboxgl.accessToken = config.accessToken;

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: config.style,
            center: config.mapStart.center,
            zoom: config.mapStart.zoom,
            pitch: config.mapStart.pitch,
            bearing: config.mapStart.bearing
        });

        const marker = new mapboxgl.Marker();
        if (config.showMarkers) {
            marker.setLngLat(config.mapStart.center).addTo(map);
        }

        function getLayerPaintType(layer) {
            var layerType = map.getLayer(layer).type;
            return layerTypes[layerType];
        }

        function setLayerOpacity(layer) {
            var paintProps = getLayerPaintType(layer.layer);
            paintProps.forEach(function(prop) {
                map.setPaintProperty(layer.layer, prop, layer.opacity);
            });
        }

        const setState = this.setState.bind(this);

        map.on('load', function () {

            // instantiate the scrollama
            const scroller = scrollama();

            // setup the instance, pass callback functions
            scroller
            .setup({
                step: '.step',
                offset: 0.5,
                progress: true
            })
            .onStepEnter(response => {
                const chapter = config.chapters.find(chap => chap.id === response.element.id);
                setState({currentChapter:chapter});
                map.flyTo(chapter.location);
                if (config.showMarkers) {
                    marker.setLngLat(chapter.location.center);
                }
                if (chapter.onChapterEnter.length > 0) {
                    chapter.onChapterEnter.forEach(setLayerOpacity);
                }
            })
            .onStepExit(response => {
                var chapter = config.chapters.find(chap => chap.id === response.element.id);
                if (chapter.onChapterExit.length > 0) {
                    chapter.onChapterExit.forEach(setLayerOpacity);
                }
            });
        });
    }

    render() {
        const config = this.props;
        const currentChapterID = this.state.currentChapter.id;
        return (
            <div>
                <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
                <div id="features" className={alignments[config.alignment]}>
                    {
                        config.chapters.map(chapter => 
                            <Chapter key={chapter.id} {...chapter} currentChapterID={currentChapterID}/>
                        )
                    }
                </div>
            </div>
        );
    }

}

function Chapter({id, title, image, description, currentChapterID}) {
    const classList = id === currentChapterID ? "step active" : "step";
    return (
        <div id={id} className={classList}>
            <div>
                { title &&
                    <h3 className="title">{title}</h3>
                }
                { image &&
                    <img src={image}></img>
                }
                { description &&
                    <p>{description}</p>
                }
            </div>
        </div>
    )
}

export default App;
