import { useDispatch } from "react-redux"
import { toggleTabs } from "../redux/actions/actions"
import { TABS } from "../redux/actions/constants"

const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch()

    return (
        <>
            {
                TABS.map(tab => (
                    <button key={tab} className={tab === currentTab ? 'button selected' : 'button'} onClick={() => dispatch(toggleTabs(tab))} >
                        {tab}
                    </button>
                ))
            }
        </>
    )
}

export default Tabs