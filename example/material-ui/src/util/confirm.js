import Confirmation from 'components/Confirmation';
import { createConfirmation } from 'async-react-confirm';

const confirm = createConfirmation(Confirmation);

export default function(confirmation, options = {}) {
  return confirm({ confirmation, ...options });
}
