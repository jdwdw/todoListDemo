import React from 'react';
import { assert } from 'chai';
import TestUtils from 'react-addons-test-utils';
import { describe, it } from 'mocha';
import TodoItem from '../../src/components/TodoItem';

function shallowRender(Component, props) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component {...props} />);
  return renderer.getRenderOutput();
}

describe('TodoItem Test', () => {
  it('TodoItem should not have done class', () => {
    const todoItemData = {
      isDone: false,
      text: 'first',
    };
    const todoTtem = shallowRender(TodoItem, todoItemData);
    assert.equal(todoTtem.props.children[1].props.className.indexOf('task-done'), -1);
  });
});
