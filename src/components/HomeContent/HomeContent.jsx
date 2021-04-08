import React, {useContext} from 'react'
import { UserConContext } from '../../providers/UserConProvider'
import HomeContentPresenter from './HomeContentPresenter'

export default function HomeContent() {

    const { setUserName } = useContext(UserConContext)

    return <HomeContentPresenter setUsername={setUserName} />
} 