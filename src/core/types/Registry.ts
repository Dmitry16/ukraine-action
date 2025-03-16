import { ComponentType } from 'react'

export type ItemName = string

export type ItemRegistryType = Record<ItemName, ComponentType<any>>

export type RegisterItem = (itemName: ItemName, widget: ComponentType<any>) => void

export type GetItemFromRegistry = (itemName: ItemName) => ComponentType<any> | null

export type GetItemsFromRegistry = (itemNames: ItemName[]) => (ComponentType<any> | null)[]

export abstract class Registry<T> {
    protected registry: Record<string, T> = {}
  
    registerItem(name: string, item: T): void {
      this.registry[name] = item
    }
  
    registerItems(items: Record<string, T>): void {
      console.log("registerItems:::", this.registry)

      Object.keys(items).forEach((name) => {
        this.registerItem(name, items[name])
      })
    }
  
    getItem(name: string): T | null {
      return this.registry[name] || null
    }
  
    getItems(names: string[]): (T | null)[] {
      return names.map((name) => this.getItem(name))
    }
}
  
