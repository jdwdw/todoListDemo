import React from 'react';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { assert } from 'chai';
import { describe, it } from 'mocha';
import App from '../../src/components/app';
import TodoItem from '../../src/components/TodoItem';


function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component />);
  return renderer.getRenderOutput();
}

describe('TodoList Test', () => {
  describe('TodoList  ShallowRender Test', () => {
    it('todoList title should be init  (in shallowRender) ', () => {
      const todoList = shallowRender(App);
      assert.equal(todoList.props.children[0].type, 'h1');
      assert.equal(todoList.props.children[0].props.children, 'todoList');
    });
  });
  describe('TodoList DOM Rendering Test', () => {
    const todoList = TestUtils.renderIntoDocument(<App />);
    it('Add todoItem in ,use TodoHeader', () => {
      const appDom = findDOMNode(todoList);
      const todoItemsLength = appDom.querySelectorAll('.todo-item').length;
      const todoInput = appDom.querySelector('.todo-header>Input');
      todoInput.value = 'To do new';
      TestUtils.Simulate.keyUp(todoInput, { key: 'Enter', keyCode: 13, which: 13 });
      assert.equal(appDom.querySelectorAll('.todo-item').length, todoItemsLength + 1);
      const todoItemComponent = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem)[0];
      assert.equal(todoItemComponent.props.text, 'To do new');
    });


    it('Click delete button on todoItem,the todoItem should be deleted', () => {
      const todoItems = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'li');
      const todoLength = todoItems.length;
      const deleteButton = todoItems[0].querySelector('.deleteButton');
      TestUtils.Simulate.click(deleteButton);
      const todoItemsAfterClick = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'li');
      assert.equal(todoItemsAfterClick.length, todoLength - 1);
    });
  });

  describe('TodoList Change todoItemText', () => {
    const todoList = TestUtils.renderIntoDocument(<App />);
    const appDom = findDOMNode(todoList);
    const todoInput = appDom.querySelector('.todo-header>Input');
    todoInput.value = 'To do new';
    TestUtils.Simulate.change(todoInput);
    TestUtils.Simulate.keyUp(todoInput, { key: 'Enter', keyCode: 13, which: 13 });
    let todoItem = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'li')[0];
    let todoItemEdit = todoItem.querySelector('Input');
    const changeButton = todoItem.querySelector('.changeButton');
    it('Change the task text  can not work,when input disabled is true ', () => {
      assert.isTrue(todoItemEdit.disabled);
    });
    it('Change the task text is work,when disabled is false ', () => {
      // const todoListComponent = TestUtils.scryRenderedComponentsWithType(todoList, App)[0];
      TestUtils.Simulate.click(changeButton);
      assert.isFalse(todoItemEdit.disabled);
      todoItem = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'li')[0];
      todoItemEdit = todoItem.querySelector('Input');
      todoItemEdit.value = 'To do can change';
      TestUtils.Simulate.change(todoItemEdit);
      TestUtils.Simulate.keyUp(todoItemEdit, { key: 'Enter', keyCode: 13, which: 13 });
      const todoItemComponent = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem)[0];
      assert.isTrue(todoItemComponent.props.text === 'To do can change');
    });
  });
});
