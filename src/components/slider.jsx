import { useState } from "react";
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from "@chakra-ui/react";

const CommonSlider = ({min, max, initialValue}) => {

  const [sliderValue, setSliderValue] = useState(initialValue);

  return (
    <Box px={12} pt={10}>
      <Slider min={min} max={max} value={sliderValue} onChange={(val) => setSliderValue(val)}>    
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='#539BFF'
          color='white'
          fontSize='xs'
          rounded='6'
          w='75px'
          mt='-12'
          ml='-9'
          px='1'
          py='1'
        >
          ${sliderValue.toLocaleString()}
        </SliderMark>
        <SliderMark
          value={sliderValue}
          mt='-6'
          ml='-1.5'
          w='0'
          h='0'
          borderTop='10px solid #539BFF'
          borderX='6px solid transparent'
        >
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack bg='#5A6A85'/>
        </SliderTrack>
        <SliderThumb boxSize={5} bg='#539BFF'/>
      </Slider>
    </Box>
  )
}

export default CommonSlider;