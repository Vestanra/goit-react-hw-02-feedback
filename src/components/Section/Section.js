import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <div>
            <h1>{title}</h1>
            {children}    
        </div>
    )
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
}