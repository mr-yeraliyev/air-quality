// ExampleStore.ts
import { makeAutoObservable } from 'mobx'

interface IMainPageStore {
  mainPageTitle: string
  setMainPageTitle: (title: string) => void
}

export default class MainPageStore implements IMainPageStore {
  mainPageTitle: string

  constructor() {
    this.mainPageTitle = 'Recent Comparison'
    makeAutoObservable(this)
  }

  setMainPageTitle = (title: string) => {
    this.mainPageTitle = title + ' Comparison'
  }
}
