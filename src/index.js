export class Originator {

  constructor(n) {
    const nameObj = this._setName(n)
    console.log('nameObj', nameObj)
  }

  _setName(n) {
    return {
      name: n
    }
  }

}
