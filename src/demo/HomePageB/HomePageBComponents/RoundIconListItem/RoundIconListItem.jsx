import React from 'react';
import PropTypes from 'prop-types';
import { requireOneOf } from '../../../../kai-ui/src/utils';
import { useFocus } from '../../../../kai-ui/src/hooks';
import colors from '../../../../kai-ui/src/theme/colors.scss';
import './RoundIconListItem.scss';

const prefixCls = 'kai-ril';

const IconListItem = React.memo((props) => {
	const { primary, secondary, icon, iconSrc, focusColor, forwardedRef, index, onFocusChange, messages } = props;

	const handleFocusChange = (isNowFocused) => {
		if (isNowFocused) {
			onFocusChange(index);
		}
	};

	const isFocused = useFocus(forwardedRef, handleFocusChange, false);

	const itemCls = prefixCls;
	const iconCls = `${prefixCls}-icon-${isFocused ? 'focused' : 'unfocused'}`;
	const lineCls = `${prefixCls}-line`;
	const primaryCls = `${prefixCls}-primary`;
	const secondaryCls = `${prefixCls}-secondary ${secondary ? '' : 'hidden'}`;
	const messageCls = `${prefixCls}-message`;
	const renderedIcon = iconSrc === null ? <span className={icon} /> : <img src={iconSrc} alt="" />;
	const itemBgColor = (isFocused) => {
		return isFocused ? { backgroundColor: focusColor } : { backgroundColor: colors.white };
	};
	const messageIconColor = (isFocused) => {
		return isFocused
			? { backgroundColor: colors.white, color: colors.black }
			: { backgroundColor: focusColor, color: colors.white };
	};

	return (
		<div tabIndex="0" className={itemCls} ref={forwardedRef} style={itemBgColor(isFocused)}>
			<div className={iconCls}>{renderedIcon}</div>
			<div className={lineCls}>
				<span className={primaryCls}>{primary}</span>

				<label className={secondaryCls}>{secondary}</label>
			</div>
			{ (messages>1)?
				<div className={messageCls} style={messageIconColor(isFocused)}>
					{messages}
				</div>:<div></div>
			}
		</div>
	);
});

const requireOneIcon = requireOneOf({
	icon: PropTypes.string,
	iconSrc: PropTypes.string
});

IconListItem.propTypes = {
	primary: PropTypes.string.isRequired,
	secondary: PropTypes.string,
	icon: requireOneIcon,
	iconSrc: requireOneIcon,
	focusColor: PropTypes.string,
	forwardedRef: PropTypes.oneOfType([ PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) }) ]),
	index: PropTypes.number,
	onFocusChange: PropTypes.func
};

IconListItem.defaultProps = {
	secondary: null,
	icon: null,
	iconSrc: null,
	focusColor: colors.defaultFocusColor
};

export default React.forwardRef((props, ref) => <IconListItem forwardedRef={ref} {...props} />);
