import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.btnWraper}>
      {Object.keys(options).map((el, idx) => {
        return (
          <button
            key={idx}
            type="button"
            className={css.btn}
            onClick={() => {
              onLeaveFeedback(el);
            }}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
