import { reverseRoute, isParamRequired } from './route';

test('check reverseRoute', () => {
    expect(reverseRoute('/projects/:projectId/', { projectId: 12 })).toEqual('/projects/12/');
    expect(reverseRoute('/projects/:projectId?', {})).toEqual('/projects');
    expect(reverseRoute('/:userId/projects/:projectId?', { userId: 1 })).toEqual('/1/projects');
    expect(reverseRoute('/:userId/projects/:projectId?/', { userId: 1 })).toEqual('/1/projects/');
});

test('check isRaramRequired', () => {
    expect(isParamRequired('/projects/:projectId/', 'projectId')).toEqual(true);
    expect(isParamRequired('/projects/:projectId?', 'projectId')).toEqual(false);
    expect(isParamRequired('/:userId/projects/:projectId?', 'projectId')).toEqual(false);
    expect(isParamRequired('/projects/:projectId/', 'userId')).toEqual(false);
    expect(isParamRequired('/projects/:projectId?', 'userId')).toEqual(false);
    expect(isParamRequired('/:userId/projects/:projectId?', 'userId')).toEqual(true);
});
