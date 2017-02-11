import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import VideoBox from '../src';

describe('<VideoBox /> component', function() {

  it('should badge exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<VideoBox />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
