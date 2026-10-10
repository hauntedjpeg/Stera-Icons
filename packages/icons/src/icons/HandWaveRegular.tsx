import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandWaveRegularProps = Omit<IconBaseProps, 'children'>;

const HandWaveRegular = memo(
  forwardRef<SVGSVGElement, HandWaveRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.22 15.8c.39-.15.82.04.98.42.25.64 1.16 2.25 2.4 3.18.33.25.4.72.15 1.05s-.72.4-1.05.15c-1.53-1.15-2.58-3.03-2.9-3.82-.15-.39.04-.82.42-.98" />
        <path fillRule="evenodd" d="M9.88 4c1.12-.64 2.56-.26 3.21.86l1.84 3.18c.04-.68.37-1.28.86-1.68q.63-.51 1.5-.53c1.26 0 2.3 1 2.34 2.27l.39 2.54c1.16 3.2-.11 6.84-3.16 8.6-3.43 1.96-7.81.8-9.8-2.61l-2.8-4.84c-.65-1.13-.26-2.56.86-3.21q.4-.22.82-.28l-.1-.18c-.66-1.13-.27-2.56.86-3.2.74-.43 1.6-.41 2.3-.03q.3-.55.88-.88m1.92 1.62c-.24-.4-.76-.55-1.17-.31-.41.23-.55.75-.32 1.15l2.41 4.15c.2.36.09.81-.27 1.02s-.82.09-1.03-.27l-2.8-4.84c-.24-.4-.76-.54-1.17-.3-.41.23-.55.74-.32 1.15l3.01 5.18c.21.36.09.82-.27 1.02s-.82.09-1.03-.27l-1.8-3.1-.05-.08c-.25-.35-.73-.46-1.12-.24-.4.24-.54.75-.31 1.16l2.8 4.83c1.57 2.7 5.04 3.62 7.75 2.07 2.43-1.4 3.43-4.32 2.48-6.85q-.04-.07-.04-.16l-.4-2.64-.01-.1c0-.47-.38-.85-.86-.86q-.31.01-.54.2-.3.24-.31.65l-.03 2.6c0 .26-.14.5-.37.64l-.06.04-.2.15q-.27.2-.53.58-.26.36-.3.83c-.02.3.05.7.33 1.19.21.36.09.82-.27 1.02s-.82.09-1.02-.27q-.62-1.08-.53-2.04c.04-.63.27-1.16.54-1.56q.35-.5.68-.79z" clipRule="evenodd" />
        <path d="M18.67 2.99c1.12 0 2.07.56 2.71 1.27.64.7 1.06 1.63 1.06 2.5 0 .42-.33.75-.75.75-.41 0-.75-.34-.75-.75 0-.42-.22-1-.67-1.49-.43-.48-1-.78-1.6-.78-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75" />
    </IconBase>
  ))
);

HandWaveRegular.displayName = 'HandWaveRegular';

// Triple export pattern
export { HandWaveRegular, HandWaveRegular as HandWaveRegularIcon, HandWaveRegular as SiHandWaveRegular };
export default HandWaveRegular;
export type { HandWaveRegularProps };
