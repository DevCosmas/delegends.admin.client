import Typewriter from 'typewriter-effect';

import { AGRO_HERO_WORD, HEALTH_HERO_WORD } from './../utils/constant';

function TypingAnimation() {
  return (
    <Typewriter
      options={{
        strings: [HEALTH_HERO_WORD, AGRO_HERO_WORD],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
export default TypingAnimation;
