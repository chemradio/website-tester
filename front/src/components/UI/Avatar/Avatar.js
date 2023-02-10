import React from 'react'
import { apiUrl } from '../../../config'
import imageNotFound from '../../../assets/icons/no-photo.svg'
import './Avatar.scss'

const Avatar = ({ user, className }) => {
  let avatarImage = imageNotFound

  if (user?.avatar) {
    if (user?.avatar.match(/http/) || user?.avatar.match(/https/)) {
      avatarImage = user.avatar
    } else if (user.avatar.includes('fixtures')) {
      avatarImage = `${apiUrl}/${user.avatar}`
    } else {
      avatarImage = `${apiUrl}/uploads/${user.avatar}`
    }
  }

  return <img className={`avatar ${className}`} src={avatarImage} alt={user?.username} />
}

export default Avatar
