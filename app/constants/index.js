// Benefit of action types (constants) in one place:
// - these will be shared across components as they need to dispatch actions
// - encourage consistent naming patterns because they are not scattered across the codebase
import loginActionTypes from './login';
import marketActionTypes from './market';

export default {
	loginActionTypes,
	marketActionTypes,
}