import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import { sizes, colors, fade, spacing } from '../theme';

const SliderZoom = ({ images }) => {
  const [active, setActive] = React.useState(0);
  const [preview, setPreview] = React.useState(false);

  const handleActiveNext = () => {
    if (active + 1 === images.length) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const handleActivePrev = () => {
    if (active === 0) {
      setActive(images.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  return (
    <React.Fragment>
      <SliderContent>
        {images.map((src, index) => (
          <React.Fragment key={src}>
            {index === active && <SliderImage onClick={() => setPreview(true)} src={src} />}
          </React.Fragment>
        ))}
        <IconNext color="primary" onClick={handleActiveNext}>
          <ArrowForwardIcon />
        </IconNext>
        <IconPrev color="primary" onClick={handleActivePrev}>
          <ArrowBackIcon />
        </IconPrev>
      </SliderContent>
      <Preview isActive={preview}>
        <PreviewOverflow onClick={() => setPreview(false)} />
        <PreviewContent>
          <TransformWrapper wheel={{ zoomIn: { step: 1 }, zoomOut: { step: 1 } }}>
            <TransformComponent>
              {images.map((src, index) => (
                <React.Fragment key={src}>{index === active && <Image src={src} />}</React.Fragment>
              ))}
            </TransformComponent>
          </TransformWrapper>
        </PreviewContent>
        ;
      </Preview>
    </React.Fragment>
  );
};

SliderZoom.propTypes = {
  images: PropTypes.array.isRequired,
};

const PreviewContent = styled.div`
  position: relative;
`;

const PreviewOverflow = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: opacity ${sizes.transition.hover};

  &:hover {
    opacity: ${sizes.opacity.hover};
  }
`;

const Preview = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999;
  padding: ${sizes.indent.default};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity ${sizes.transition.hover};
  pointer-events: ${(p) => (p.isActive ? 'unset' : 'none')};
  opacity: ${(p) => (p.isActive ? 1 : 0)};
`;

const SliderImage = styled.img`
  object-fit: scale-down;
  object-position: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: opacity ${sizes.transition.hover};

  &:hover {
    opacity: ${sizes.opacity.hover};
  }
`;

const IconNext = styled(IconButton)`
  && {
    position: absolute;
    right: ${spacing(2)};
    top: calc(50% - (48px / 2));
  }
`;

const IconPrev = styled(IconButton)`
  && {
    position: absolute;
    left: ${spacing(2)};
    top: calc(50% - (48px / 2));
  }
`;

const Image = styled.img`
  border-radius: ${spacing(1)};
  animation: ${fade} 0.5s;
  width: 100%;
`;

const SliderContent = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: ${spacing(3)};

  position: relative;
  display: flex;
  height: 300px;
  overflow-x: scroll;
  border-radius: ${spacing(1)};
  background-color: ${colors.gray};
`;

export const Slider = SliderZoom;
