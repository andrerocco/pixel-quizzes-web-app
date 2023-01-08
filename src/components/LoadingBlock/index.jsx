import './styles.css';
import P from 'prop-types';
// Assets
import loadingIcon from '../../assets/icons/loading-animation.svg';

export const LoadingBlock = ({ loadingStatus, className, children, ...props }) => {
    return loadingStatus ? (
        <div className={`LoadingIconWrapper ` + className} {...props}>
            <img src={loadingIcon} alt="Loading..." />
        </div>
    ) : (
        <div {...props}>{children}</div>
    );
};

LoadingBlock.propTypes = {
    loadingStatus: P.bool,
    className: P.string,
    children: P.node,
};
