import { FOUR_NUMBERS_ONLY_REGEX } from 'constants/regex/numbersOnly';
import InputMask from 'inputmask';

const maskAllTextAreas = () => {
  const allInputs = document.querySelectorAll('textarea');

  allInputs.forEach((input) =>
    new InputMask({
      placeholder: '',
      regex: String.raw`${FOUR_NUMBERS_ONLY_REGEX}`,
    }).mask(input),
  );
};

export default maskAllTextAreas;
