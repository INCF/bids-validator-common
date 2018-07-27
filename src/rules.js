// An index of rules documents to export as modules
// The Python module expects these to be within its tree, but we can just import them from there
export { default as associated_data_rules } from '../bids_validator_common/rules/associated_data_rules.json'
export { default as file_level_rules } from '../bids_validator_common/rules/file_level_rules.json'
export { default as fixed_top_level_names } from '../bids_validator_common/rules/fixed_top_level_names.json'
export { default as path } from '../bids_validator_common/rules/path.json'
export { default as phenotypic_rules } from '../bids_validator_common/rules/phenotypic_rules.json'
export { default as session_level_rules } from '../bids_validator_common/rules/session_level_rules.json'
export { default as subject_level_rules } from '../bids_validator_common/rules/subject_level_rules.json'
export { default as top_level_rules } from '../bids_validator_common/rules/top_level_rules.json'