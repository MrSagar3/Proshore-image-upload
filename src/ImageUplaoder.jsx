import React, { useState } from 'react';
import { CssBaseline,Box, Button, Stack, Typography } from '@mui/material';
import ReactImageUploading from 'react-images-uploading';

const ImageUplaoder = () => {
    const [images,setImages]=useState([])
    const maxNumber=10;

    const onChange =(imageList,addUpdateIndex)=>{
        console.log(imageList,addUpdateIndex)
        setImages(imageList)
    }
  return (
    <React.Fragment>
        <CssBaseline/>
        <Box sx={{margin:'10px',padding:'10px'}}>
            <Typography variant='h5' align='center' fontWeight='bold' >Upload Your Images</Typography>
        </Box>
        <Box sx={{bgcolor:'#3E362E', width:'100vw'}}>
        <ReactImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        >
            { ({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
            })=> (
                <>
                <Button variant='contained' color='primary' sx={{color:'white', margin:'50px', padding:'20px'}}
                onClick={onImageUpload}
                {...dragProps}
                >
                    Click here to upload image
                </Button>
                <Button variant='contained' color='error' sx={{color:'white', margin:'20px', padding:'20px'}} onClick={onImageRemoveAll}>Remove all images</Button>

               {/* rendering the images */}
              <Stack spacing={2}>
                <Typography sx={{color:'white',padding:'10px' }} align='left'>Your uploaded Image is:</Typography>
                {imageList.map((image,index)=>(
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                       <img src={image['data_url']} alt='hehe image' width="400px" height="400px"/>
                       <>
                       <Button variant='contained' onClick={()=>onImageUpdate(index)} sx={{margin:'10px',padding:'20px'}}>Update</Button>
                       <Button
                       variant='contained'
                       color='error'
                       sx={{margin:'20px', padding:'20px'}}
                        onClick={()=>onImageRemove(index)}>Remove</Button>
                       </> 
                    </Box>
                ))}
              </Stack>

                </>

        )}

        </ReactImageUploading>
            </Box>
        
    </React.Fragment>
  )
}

export default ImageUplaoder