import './styles.css';
import P from 'prop-types';
// Assets
import loadingIcon from '../../assets/icons/loading-animation.svg';

export const LoadingBlock = ({ loadingStatus, children, ...props }) => {
    return loadingStatus ? (
        <div className="LoadingIconWrapper">
            <img src={loadingIcon} alt="Loading..." />
        </div>
    ) : (
        <div {...props}>{children}</div>
    );
};

LoadingBlock.propTypes = {
    loadingStatus: P.bool,
    children: P.node,
};
