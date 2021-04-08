import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTech } from '../../actions/techActions'

const AddTechModal = ({ addTech }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const onSubmit = () => {
        if (firstname === '' || lastname === '') {
            M.toast({ html: 'Please enter the first and lastname' });
        } else {
            const newTech = {
                firstname: firstname,
                lastname: lastname
            };
            addTech(newTech);

            setFirstname('');
            setLastname('');

            M.toast({ html: `${firstname} ${lastname} was added` });
        }
    }

    return (
        <div id="add-tech-modal" className="modal" >
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} />
                        <label htmlFor="firstname" className="active">Firstname</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastname" value={lastname} onChange={e => setLastname(e.target.value)} />
                        <label htmlFor="lastname" className="active">Lastname</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    )
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal)
