import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { InputBase } from '@mui/material';
import Button from '../../shared/components/FormElements/Button';
import './UserPlaces.css';

function Moderator() {
    return (
        <React.Fragment>
            <div className='center'>
                <Button inverse >Users</Button>
                <Button inverse >Joining Requests</Button>
                <Button inverse >Status</Button>
                <Button inverse >Reports Page</Button>
            </div>
        </React.Fragment>
    )
}
export default Moderator