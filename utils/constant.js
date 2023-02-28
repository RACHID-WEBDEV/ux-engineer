export const FEEDBACK = {
  ALL: 'FEEDBACK.ALL',
  ERROR: 'FEEDBACK.ERROR',
  SUCCESS: 'FEEDBACK.SUCCESS',
  NONE: 'FEEDBACK.NONE'
};

export const isDevEnvironment = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';