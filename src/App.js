import React from 'react';
import theme from './theme';
import { Deck } from 'spectacle';

const slidesImports = [
  import('./slides/000-meetup'),
  import('./slides/010-what-are-providers'),
  import('./slides/011-service-providers'),
  import('./slides/020-purposes'),
  import('./slides/025-why-use'),
  import('./slides/030-registration'),
  import('./slides/040-making-providers'),
  import('./slides/045-deferred-providers'),
  import('./slides/050-register'),
  import('./slides/055-boot'),
  import('./slides/058-dependency-injection'),
  import('./slides/060-building-packages'),
  import('./slides/060-folder-structure'),
  import('./slides/061-config'),
  import('./slides/062-routes'),
  import('./slides/063-migrations'),
  import('./slides/064-translations'),
  import('./slides/065-views'),
  import('./slides/066-artisan-commands'),
  import('./slides/067-public-assets'),
  import('./slides/070-extending-the-framework'),
  import('./slides/071-extensions'),
  import('./slides/072-replacing-framework-classes'),
  import('./slides/080-the-container'),
  import('./slides/081-binding'),
  import('./slides/082-singletons'),
  import('./slides/100-conclusion'),
  import('./slides/110-thank-you'),
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: []
    };
  }

  componentDidMount() {
    const importedSlides = [];

    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    if (this.state.slides.length === 0) {
      return null;
    }

    return (
      <Deck
        transition={['fade']}
        transitionDuration={250}
        theme={theme}
        showFullscreenControl={false}
      >
        { this.state.slides.map((TheSlide, i) => TheSlide()) }
      </Deck>
    );
  }
}
export default App;
