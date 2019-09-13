- [Scrollytelling Template For Journalists](#scrollytelling-template-for-journalists)
  * [Prerequisites](#prerequisites)
  * [Getting Started](#getting-started)
    + [Vanilla JS](#vanilla-js)
      - [Steps](#steps)
      - [Generate Map Position Using `Helper.hml`](#generate-map-position-using--helperhml-)
      - [Configuration File and Layer Settings](#configuration-file-and-layer-settings)
      - [Configuration Options](#configuration-options)
      - [Mapbox Studio Style Configuration](#mapbox-studio-style-configuration)
    + [React](#react)
      - [Installation and dependencies](#installation-and-dependencies)
    + [Organization](#organization)
  * [Deployment](#deployment)
  * [Built With](#built-with)
  * [Authors](#authors)
  * [License](#license)
  * [Acknowledgments](#acknowledgments)


# Scrollytelling Template For Journalists
Some stories are best told with a map. Data journalists covering changing conditions in a population's demographics, the environment, an international conflict, or telling a simple travel story frequently provide geographic context in their graphics.

This template is designed to accelerate building out a "scrollytelling" map story. The primary input is a story broken into sections (`chapters`), each hooked to a particular view of a map.

Optionally, you can input a custom Mapbox Style with layers styled in Studio and toggle the layer's opacity.

The output is an HTML and JavaScript file. These outputs can be hosted on any web-accessible location, with no extra code or infrastructure required.

## Prerequisites
This template is for data journalists and digital storytellers of any kind. No coding experience is required.

To configure and publish a story, you will need:
- A Mapbox [access token](https://docs.mapbox.com/help/glossary/access-token). Sign up for a free account at [mapbox.com](https://www.mapbox.com/signup/) to get one.

- A text editor. Atom, Sublime Text, and Visual Studio Code are all fine choices.

- A place to publish your work. Any service that hosts static files that can be accessed with a browser will do.

- A story. This is unquestionably the hardest part. The best stories for this template will have sections that benefit from a map.

- Attention to detail. The configuration file does require specific syntax and punctuation. Braces, brackets, commas, and quotes are important. Follow the `config.js.template` for guidance. Some familiarity with [JSON]('https://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/') is recommended.

- Optionally, some spatial data in your Mapbox map. The template has options to include layer names to show and hide the data as the story sections transition. You may want to highlight a neighborhood, or show satellite data from two different times.

The template does not rely on any particular CSS framework, fonts, or images. There are some basic styles in the `head` of the HTML file that can be changed, so feel free to adapt and add to these to match your site and story brand.

![example story screen capture](assets/glacierdemo.gif)

## Getting Started

- Download this repository as a ZIP file using the button above, and unzip it. If you are using `git`, clone this repository.

- If you are new to coding in JavaScript, follow the instructions for Vanilla JS. If you are already working with React, are comfortable with the command line and build systems, and/or want bundled and minified code, choose React.

### Vanilla JS

In your local copy of this repository (the unzipped file you downloaded), navigate to the `src/vanilla-js/` directory.

Make a copy of `config.js.template` and name it `config.js`. Open the new `config.js` file in your text editor.

#### Steps

1. **Select the map style** you want to use (the default is Mapbox Streets, but you can find more here https://docs.mapbox.com/api/maps/#styles, or use one of your custom Studio styles).

2. **Add a Mapbox access token.** A good practice is to [create a separate](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/#creating-and-managing-access-tokens) token per map to be able to track traffic to your different maps.

3. **Choose whether or not to display a marker** at the center of each map location.


4. **Choose where your story should be aligned over the map**. Options are `center`, `left`, `right`.

```
{
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'YOUR_ACCESS_TOKEN',
    showMarkers: true,
    alignment: 'left',
    mapStart: {
        center: [-122.418398, 37.759483],
        zoom: 13.5,
        pitch: 60,
        bearing: 0
    },
    chapters: [...]
  }
```

5. **Add as many `chapters` in your template as needed.** You'll need a `,` between each section, but no comma at the end. Here is what a `chapter` looks like:

```
        {
            id: 'identifier',
            title: 'Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
```

6. **Fill out your sections as needed.** You can add a `title`, `description` which supports HTML tags. Also give each section a unique name in the section `id` property. If you have an image that goes with that section of the story, add the path to the image in the `image` property.

7. For `location`, you can use the `helper.html` file to help you determine the map's position. More below

8. Repeat until you have the location entered for each of your sections.

9. Open `index.html` in a browser, and scroll. Voila!

#### Generate Map Position Using `Helper.hml`

Using the `helper.html` file, you can search for places, zoom, pan, tilt, and rotate the map to get the desired map position (_Hint_: To tilt and rotate the map, right-click and drag the map).

Notice the location parameters are updated in the upper left corner with everytime you move the map. You can copy the location definition from that page into the `config.js` `location` property section

![location helper screen capture](assets/locationhelper.gif)

#### Configuration File and Layer Settings

Here is a sample configuration:

```
var config = {
    style: 'mapbox://styles/branigan/cjz37rcb003ib1cr3s8rnkt2d',
    accessToken: 'pk.eyJ1IjoiYnJhbmlnYW4iLCJhIjoiY2p4NHVmenFrMDBnMDRibGJveXU2NjM3NiJ9.dXHy99Lrq0GNhNBvgjdWBw',
    showMarkers: false,
    alignment: 'center',
    mapStart: {
        center: [-113.91666, 48.66451],
        zoom: 8,
        pitch: 0.00,
        bearing: 0.00
    },
    chapters: [
        {
            id: 'glacier-np',
            title: 'Glacier National Park Glaciers',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'Glacier National Park is dominated by mountains which were carved into their present shapes by the huge glaciers of the last ice age. These glaciers have largely disappeared over the last 12,000 years. Evidence of widespread glacial action is found throughout the park in the form of U-shaped valleys, cirques, arêtes, and large outflow lakes radiating like fingers from the base of the highest peaks.',
            location: {
                center: [-113.91666, 48.66451],
                zoom: 8,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
              {
                  layer: 'gnpglaciers-1998',
                  opacity: 0.25
              },
              {
                  layer: 'glaciernp-boundary',
                  opacity: 0
              }
            ]
        },
        {
            id: 'harrison1998',
            title: 'Harrison Glacier, 1998',
            image: '',
            description: 'Harrison Glacier is located in the US state of Montana in Glacier National Park. Situated on a southeast facing ridge immediately south of Mount Jackson, Harrison Glacier is the largest glacier in Glacier National Park.',
            location: {
                center: [-113.72917, 48.58938],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
}
```

#### Configuration Options

`style`: This is the Mapbox style `url` to use for the app. It can be a standard style, or a custom style from your Mapbox account. Use a custom style if you want to include custom data or layers.

`accessToken`: Your Mapbox access token.

`showMarkers`: This controls whether markers are shown at the centerpoint of each chapter. If `true`, the map will display a default blue, inverted-teardrop icon.

`alignment`: This defines where the story text should appear over the map. Options are `center`, `left`, and `right`. When the browser window is less than 750 pixels wide, the story will be `center` aligned.

`mapStart`: The location for where to start the map on load. If this location is different than the first chapter, you will see an animated zoom-in when the page first loads.

`chapters`: This contains all of the story content and map controls for each section of the story. _Array of objects_

- `id`: A slug-style ID for the chapter. This is read by the JavaScript driving the app and is assigned as an HTML `id` for the `div` element containing the rest of the story. A best-practice format would be to use kebab case, like `my-story-chapter-1`.
- `title`: The title of the section, displayed in an `h3` element.
- `image`: The path to an image to display in this section.
- `description`: The main story content for the section. This should be aligned with what the reader is seeing on the map. In the vanilla version, this field will render as HTML. Images, links, and other items can be included as HTML.
- `location`: Details about the map display and camera view.
    - `center`: Center coordinates of the map, as `longitude, latitude`
    - `zoom`: Zoom level of the map.
    - `pitch`: Angle of the map view. `0` is straight down, and `60` is highly tilted.
    - `bearing`: Degrees of rotation clockwise from North (`0`). Negative values represent counter-clockwise rotation.
- `onChapterEnter`: Layers to be displayed/hidden/muted when the section becomes active. _Array of objects_
    - `layer`: Layer name as assigned in Mapbox Studio.
    - `opacity`: The opacity to display the layer. `0` is fully transparent, `1` is fully opaque.
- `onChapterExit`: Same as `onChapterEnter` except it is triggered when the section becomes inactive. _Array of objects_


#### Mapbox Studio Style Configuration

Add and style each custom layer in your Studio style. Before the final publish, set any layers's style to be hidden with `0` opacity. **Do not hide the layer**. For example, if you have a `circle` layer, makes sure the `color-opacity` and/or the `stroke-opacity` is set to 0.

This will ensure that the map appears correctly when the story page loads. To adjust the opacity of the layers as the reader scrolls through the story, use the `onChapterEnter` or `onChapterExit` configuration options to set your desired opacity for the layer.

### React

The output of the React version of this template is functionally identical to the vanilla version. Use this version if you prefer to use React to build and deploy your story.

#### Installation and dependencies

This application was built and tested using

- Node version 10.16.3
- NPM version 6.9.0

In your local copy of this repository, navigate to the `src/react-js/` directory.

Install dependencies listed in the `package.json` file:

```
yarn install
```

Run the development server:

```
yarn start
```

Follow the instructions above for setting up your configuration file and building out your story. Once the application is ready for deployment, run:

```
yarn build
```

This command will generate a `build` directory that contains everything you will need to deploy your story. As with the vanilla JavaScript version, you will only need a deployment location capable of hosting static files.

### Organization

- `src`: Source code directory
    - `react-js`: Code for the React version of the template
    - `vanilla-js`: Code for the vanilla version of the template
- `example`: Example stories for the vanilla version of the template
    - `glacier`: Glaciers of Glacier National Park example
    - `bike-philly`: Philadelphia bicycle infrastructure example

## Deployment

Add additional notes about how to deploy this on a live system (cloud/on-prem/etc)

## Built With

List out the core pieces of technology used in this demo, with a diagram

```
Show how this all works
```

## Authors

Use the `Mapbox Solutions Architecture` as point-of-contact. Use Solutions Architecture <solutions_architecture@mapbox.com> address for contacts.

## License

This project is licensed under the XYZ License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

Link back to mapbox.com/solutions landing page.
