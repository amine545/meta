import { initializeTimes, updateTimes } from './Main';

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ['17:00', '17:30', '18:00']);
});

afterEach(() => {
  delete window.fetchAPI;
});

test('initializeTimes returns the initial available times', () => {
  expect(initializeTimes()).toEqual(['17:00', '17:30', '18:00']);
  expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
});

test('updateTimes returns available times for the selected date', () => {
  const currentTimes = ['17:00', '18:00'];
  const action = { type: 'date_changed', date: '2026-07-04' };

  expect(updateTimes(currentTimes, action)).toEqual(['17:00', '17:30', '18:00']);
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date('2026-07-04'));
});
