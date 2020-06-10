import React from 'react';
import './HorizontalLineSeperator.scss';

const prefixCls = 'seperatorLineA'
const HorLineSeperator = React.memo(
  props => {
    const {
      text,
      topOrBottom,
    } = props;

    return (
		<div className={prefixCls}>
        	<hr className={`${prefixCls}-`+`${topOrBottom}`}></hr>
		</div>
    );
  }
);

export default HorLineSeperator;
