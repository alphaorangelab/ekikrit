import { Tooltip } from "antd";
import PropTypes from "prop-types";

import { PlusButton } from "./style";

const FloatingBtn = ({
    onClick,
    tooltipTitle,
    positionRight,
    positionBottom,
    position,
}) => {
    return (
        <Tooltip title={tooltipTitle}>
            <PlusButton
                onClick={onClick}
                positionBottom={positionBottom}
                positionRight={positionRight}
                position={position}
            >
                +
            </PlusButton>
        </Tooltip>
    );
};

FloatingBtn.propTypes = {
    onClick: PropTypes.func,
    tooltipTitle: PropTypes.string,
    positionRight: PropTypes.any,
    positionBottom: PropTypes.any,
    position: PropTypes.string,
};

export default FloatingBtn;
