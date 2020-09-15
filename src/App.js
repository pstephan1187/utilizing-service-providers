import React from 'react';
import theme from './theme';
import { Deck } from 'spectacle';

const slidesImports = [
  import('./slides/000-meetup'),
  import('./slides/001-service-providers'),
  import('./slides/010-what-are-providers'),
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
        { this.state.slides.map((TheSlide, i) => TheSlide({key: i})) }
      </Deck>
    );
  }
}
export default App;
