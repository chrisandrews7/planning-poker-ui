import { expect } from 'chai';
import { spy } from 'sinon';
import { EventEmitter } from 'events';

import socketListener from './listeners';
import { updateVote, removePlayer } from '../../actions/players';
import {
  PLAYER_JOINED,
  PLAYER_LEFT,
  VOTE_UPDATED
} from '../../constants/eventTypes';

describe('Socket Middleware - Listeners', () => {
  let socketMock;
  let dispatchMock;

  beforeEach(() => {
    socketMock = new EventEmitter();
    dispatchMock = spy();
    socketListener(socketMock, dispatchMock);
  });

  it('should dispatch updateVote when PLAYER_JOINED event is fired', () => {
    socketMock.emit(PLAYER_JOINED, {
      playerId: 'Steve'
    });

    expect(
      dispatchMock
        .calledWithExactly(updateVote('Steve'))
    ).to.be.true;
  });

  it('should dispatch updateVote when VOTE_UPDATED event is fired', () => {
    socketMock.emit(VOTE_UPDATED, {
      playerId: 'Simon',
      vote: 5
    });

    expect(
      dispatchMock
        .calledWithExactly(updateVote('Simon', 5))
    ).to.be.true;
  });

  it('should dispatch removePlayer when PLAYER_LEFT event is fired', () => {
    socketMock.emit(PLAYER_LEFT, {
      playerId: 'Dave'
    });

    expect(
      dispatchMock
        .calledWithExactly(removePlayer('Dave'))
    ).to.be.true;
  });
});
