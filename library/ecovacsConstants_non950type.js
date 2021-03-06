// These dictionaries convert to and from Ozmo's consts (which closely match what the UI and manuals use)
// to and from what the Ecovacs API uses (which are sometimes very oddly named and have random capitalization.)
exports.CLEAN_MODE_TO_ECOVACS = {
    'auto': 'auto',
    'edge': 'border',
    'spot': 'spot',
    'spot_area': 'SpotArea',
    'single_room': 'singleroom',
    'stop': 'stop'
};

exports.CLEAN_ACTION_TO_ECOVACS = {
    'start': 's',
    'pause': 'p',
    'resume': 'r',
    'stop': 'h',
};

exports.CLEAN_ACTION_FROM_ECOVACS = {
    's': 'start',
    'p': 'pause',
    'r': 'resume',
    'h': 'stop',
};

exports.CLEAN_MODE_FROM_ECOVACS = {
    'auto': 'auto',
    'border': 'edge',
    'spot': 'spot',
    'SpotArea': 'spot_area',
    'singleroom': 'single_room',
    'stop': 'stop',
    'going': 'returning'
};

exports.FAN_SPEED_TO_ECOVACS = {
    'normal': 'standard',
    'high': 'strong'
};

exports.WATER_LEVEL_TO_ECOVACS = {
    'low': '1',
    'medium': '2',
    'high': '3',
    'max': '4'
};

exports.WATER_LEVEL_FROM_ECOVACS = {
    '1': 'low',
    '2': 'medium',
    '3': 'high',
    '4': 'max'
};

exports.FAN_SPEED_FROM_ECOVACS = {
    'standard': 'normal',
    'strong': 'high'
};

exports.CHARGE_MODE_TO_ECOVACS = {
    'return': 'go'
};

exports.CHARGE_MODE_FROM_ECOVACS = {
    'Going': 'returning',
    'going': 'returning',
    'SlotCharging': 'charging',
    'slot_charging': 'charging',
    'WireCharging': 'charging',
    'Idle': 'idle',
    'idle': 'idle'
};

exports.COMPONENT_TO_ECOVACS = {
    'main_brush': 'Brush',
    'side_brush': 'SideBrush',
    'filter': 'DustCaseHeap'
};

exports.COMPONENT_FROM_ECOVACS = {
    'brush': 'main_brush',
    'side_brush': 'side_brush',
    'dust_case_heap': 'filter',
    'Brush': 'main_brush',
    'SideBrush': 'side_brush',
    'sideBrush': 'side_brush',
    'DustCaseHeap': 'filter',
    'heap': 'filter'
};
