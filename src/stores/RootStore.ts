import { makeAutoObservable } from 'mobx'
import MainPageStore from './MainPageStore'

interface IRootStore {
  mainPageStore: MainPageStore
}
class RootStore implements IRootStore {
  mainPageStore: MainPageStore
  constructor() {
    this.mainPageStore = new MainPageStore()
    makeAutoObservable(this)
  }
}

const rootStore = new RootStore()
export default rootStore
