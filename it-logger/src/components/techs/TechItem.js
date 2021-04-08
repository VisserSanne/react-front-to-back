import React from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTech } from '../../actions/techActions'

const TechItem = ({ tech, deleteTech }) => {
    const onDelete = (id) => {
        deleteTech(id);
        M.toast({ html: 'Technicion deleted' });
    }
    return (
        <li className="collection-item">
            <div>
                {tech.firstname} {tech.lastname}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text" onClick={() => onDelete(tech.id)}>delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
}

export default connect(null, { deleteTech })(TechItem)
