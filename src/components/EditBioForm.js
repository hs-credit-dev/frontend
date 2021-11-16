import { React, useState } from 'react'

const Form = () => {
    const [about, setAbout] = useState('')

    const handleAboutChange = (event) => {
        setAbout(event.target.value)
        console.log(about)
    }

    const handleSubmit = () => {
        //post data to backend
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Edit About:
                <input type="text" name="about" onChange={handleAboutChange} />
            </label>
            <input type="submit" name="submit" />
        </form>
    )
}

export default Form


// import { useHistory } from "react-router-dom";
// import SaveIcon from '@mui/icons-material/Save';
// import AddressModel from '../models/address'
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import React from 'react'
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';

// const EditCard = ({ address, setAddress, isEditMode, setIsEditMode }) => {
//     const history = useHistory();
//     // const [address] = React.useState(addressData);



//     const handleAddressUpdate = (id) => {
//         console.log(id)
//         AddressModel.update(id, address)
//             .then(response => {
//                 console.log(response.data);
//                 setAddress(response.data);
//                 setIsEditMode(!isEditMode)
//                 history.push("/address-book");
//             })
//             .catch(e => {
//                 console.log(e);
//             });
//     };

//     // submit form
//     const onFormSubmit = (e) => {
//         console.log(e.target.id);
//     }

//     // set state for each input
//     const onInputChange = (e) => {

//         setAddress({
//             ...address,
//             [e.target.name]: e.target.value
//         });

//         console.log(address)
//     }

//     return (
//         <Card sx={{ maxWidth: 700, height: '25%', marginBottom: '1rem' }} >
//             <CardActionArea>
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         Edit Your Address
//                     </Typography>
//                     <Box
//                         component="form"
//                         onSubmit={onFormSubmit}
//                         sx={{
//                             '& .MuiTextField-root': { m: 1, width: '25ch' },
//                         }}
//                         noValidate
//                         autoComplete="off"
//                     >

//                         <TextField

//                             id="outlined-name"
//                             type="text"
//                             label="Name"
//                             name="name"
//                             value={address.name}
//                             onChange={onInputChange}
//                         />
//                         <TextField

//                             id="outlined-line1"
//                             label="Line 1"
//                             name="line1"
//                             type="text"
//                             value={address.line1}
//                             onChange={onInputChange}
//                         />
//                         <TextField
//                             id="outlined-line2"
//                             label="Line 2"
//                             name="line2"
//                             type="text"
//                             value={address.line2}
//                             onChange={onInputChange}
//                         />
//                         <TextField
//                             id="outlined-city"
//                             label="City"
//                             name="city"
//                             type="text"
//                             value={address.city}
//                             onChange={onInputChange}
//                         />
//                         <TextField
//                             id="outlined-state"
//                             label="State"
//                             name="state"
//                             type="text"
//                             value={address.state}
//                             onChange={onInputChange}
//                         />
//                         <TextField
//                             id="outlined-number"
//                             label="Zipcode"
//                             name="zip"
//                             type="text"
//                             value={address.zip}
//                             onChange={onInputChange}
//                         />
//                         <Button size="small" color="primary" startIcon={<SaveIcon />} onClick={(e) => handleAddressUpdate(address._id, address)}>
//                             Save
//                         </Button>
//                     </Box>
//                 </CardContent>
//             </CardActionArea>
//         </Card >
//     )
// }

// export default React.memo(EditCard);
