import { expect } from 'chai';
import faker from 'faker';
import { Map, fromJS } from 'immutable';
import reducer from '../../../../src/client/reducers/players';
import * as types from '../../../../src/client/constants/actionTypes';

describe('Players Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.equal(Map());
  });

  it('should handle ADD_PLAYER', () => {
    const name = faker.name.firstName();
    const vote = faker.random.number();
    const action = {
      type: types.ADD_PLAYER,
      name,
      vote
    };
    const expectedOutput = fromJS({
      [name]: {
        name,
        vote
      }
    });

    expect(reducer(undefined, action).equals(expectedOutput)).to.be.true;
  });
});