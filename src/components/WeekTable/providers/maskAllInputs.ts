import { FOUR_NUMBERS_ONLY_REGEX } from 'constants/regex/numbersOnly';
import InputMask from 'inputmask';

const maskAllInputs = () => {
  const allInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    '.bind-mask input',
  );

  allInputs.forEach((input) =>
    new InputMask({
      placeholder: '',
      regex: String.raw`${FOUR_NUMBERS_ONLY_REGEX}`,
    }).mask(input),
  );
};

export default maskAllInputs;
