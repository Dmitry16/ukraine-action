import { useComponents } from "@/core/ui/hooks/useComponents"
import { Stack } from "@mui/material" 

const ToolbarLeftWidget = () => {

    const componentsArr = useComponents(["CustomerSelection", "LocationSelection", "FloorSelection", "RoleSelection"])

    // Example Implementation of props for each component, Dmytro for you information, We can remove this example after you approved.
    const componentsProps = {
        CustomerSelection: {
            value: "",
            onChange: (e: any) => console.log('CustomerSelection changed From ToolbarLeftWidget', e),
            options: [
                { value: "", label: "My Company" },
                { value: "site1", label: "Site 1" },
                { value: "site2", label: "Site 2" },
                { value: "site3", label: "Site 3" },
            ]
        },
        LocationSelection: {
            value: "",
            onChange: (e: any) => console.log('LocationSelection changed From ToolbarLeftWidget', e),
            options: [
                { value: "", label: "Location" },
                { value: "site1", label: "Site 1" },
                { value: "site2", label: "Site 2" },
                { value: "site3", label: "Site 3" },
            ]
        },
        FloorSelection: {
            value: "",
            onChange: (e: any) => console.log('FloorSelection changed From ToolbarLeftWidget', e),
            options: [
                { value: "", label: "Floor" },
                { value: "site1", label: "Site 1" },
                { value: "site2", label: "Site 2" },
                { value: "site3", label: "Site 3" },
            ]
        },
        RoleSelection: {
            value: "",
            onChange: (e: any) => console.log('RoleSelection changed From ToolbarLeftWidget', e),
            options: [
                { value: "", label: "Original role" },
                { value: "site1", label: "Site 1" },
                { value: "site2", label: "Site 2" },
                { value: "site3", label: "Site 3" },
            ]
        }
    }

    return (
        <Stack direction="row" sx={{gap: '15px'}}>
            {componentsArr.map((Component, index) => {
                return Component ? <Component key={index} {...componentsProps[Component.name as keyof typeof componentsProps]} /> : <p key={index}>Component not found</p>
            })}
        </Stack>
    )
}

export default ToolbarLeftWidget
