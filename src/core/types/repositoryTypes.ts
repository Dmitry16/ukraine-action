export interface Vendor {
    id: string
    name: string
}
  
export interface Role {
    id: string
    name: string
}
  
export interface AssetType {
    id: string
    name: string
}
  
export interface LayerType {
    id: string
    name: string
}

export type Site = {
    id: string
    disabled?: boolean
    [key: string]: any
}

export type UserClaims = {
    profileLvl: number
    customerIds: string[]
    isSuper?: boolean
    sites?: string[]
    userRole?: string
    customerId?: string
}

export type RealCustomer = {
    // name: string
    sites?: Site[]
    [key: string]: any
}

export type Customer = {
	id: string
	name?: string
    customerInfo?: {
        name?: string
        domain?: string
        logoPath?: string
    }
	tenantID?: string
	customerType?: string
	databaseId?: string
    sites?: Site[]
    vendors?: Vendor[]
    roles?: Role[]
    assetTypes?: AssetType[]
    layerTypes?: LayerType[]
	// [key: string]: any
}

export type FloorPlan = {
    id: string
    name?: string
    imagePath?: string
    [key: string]: any
}
