import './styles.css';
import P from 'prop-types';
// Assets
import loadingIcon from '../../assets/icons/loading-animation.svg';

export const LoadingBlock = ({ isLoading, children, ...props }) => {
    return isLoading ? (
        <div className="LoadingIconWrapper">
            <img src={loadingIcon} alt="Loading..." />
        </div>
    ) : (
        <div {...props}>{children}</div>
    );
};

LoadingBlock.propTypes = {
    isLoading: P.bool,
    children: P.node,
};
