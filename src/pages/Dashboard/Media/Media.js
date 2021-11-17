import React, { useState } from 'react';
import Row from '../../../styleComponents/Row/Row';
import Col5 from '../../../styleComponents/Col5/Col5';
import Col7 from '../../../styleComponents/Col7/Col7';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import './Media.css'
import { Alert, Typography } from '@mui/material';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import FirebaseInit from '../../../firebase/firebase.init';
FirebaseInit();



const Media = () => {
    const storage = getStorage();
    const [image, setImage] = useState({});
    const metadata = {
        contentType: 'image/jpeg'
    };
    const handleImageSelect = e => {
        const img = e.target.files[0]
        setImage(img)
    }
    const handleImageUpload = e => {
        const storageRef = ref(storage, 'images/' + image?.name);
        const uploadTask = uploadBytesResumable(storageRef, image, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        console.log('nothing')
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    default:
                        console.log('nothing')
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });
            }
        );





        e.preventDefault();
    }



    return (
        <Box sx={{ py: 3 }}>
            <Row spacing={3} align={"top"}>
                <Col5>
                    <Box sx={{ textAlign: 'center' }}>
                        <form className="mediaForm" onSubmit={handleImageUpload}>
                            <label htmlFor="image" className="imageLabel">
                                <PanoramaOutlinedIcon sx={{ fontSize: '70px' }} />
                                <Typography variant="inherit">Drag & Drop, Click Your Banner Image Hear</Typography>

                                <br />
                                <Button variant="contained" sx={{
                                    zIndex: -1,
                                    borderRadius: 0, border: '1px solid #ccc', bgcolor: '#fff', boxShadow: 'none', color: '#222', textTransform: 'capitalize', width: '250px', textAlign: 'center', ':hover': {
                                        bgcolor: '#fff', boxShadow: 'none'
                                    }
                                }}>
                                    {
                                        image?.name ? image?.name : 'Choose an image to upload'
                                    }
                                </Button>
                            </label>
                            <input type="file" name="image" id="image" onChange={handleImageSelect} />

                            <Button type="submit" variant="contained" color="info" sx={{ borderRadius: 0 }}>
                                Upload Image
                            </Button>
                        </form>
                    </Box>
                </Col5>
                <Col7>
                    <Alert severity="error">Upload Media feature isn't implemented yet ! But coming soon</Alert>

                </Col7>
            </Row>
        </Box>
    );
};

export default Media;