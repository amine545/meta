import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the initial available times', () => {
  expect(initializeTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});

test('updateTimes returns available times for the selected date', () => {
  const currentTimes = ['17:00', '18:00'];
  const action = { type: 'date_changed', date: '2026-07-04' };

  expect(updateTimes(currentTimes, action)).toEqual(initializeTimes());
});
