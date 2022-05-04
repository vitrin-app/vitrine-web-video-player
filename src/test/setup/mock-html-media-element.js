global.window.HTMLMediaElement.prototype._mock = {
  paused: true,
  duration: NaN,
  _loaded: false,
  _interval: undefined,
  _load: function audioInit(audio) {
    audio.dispatchEvent(new Event('loadedmetadata'))
    audio.dispatchEvent(new Event('canplaythrough'))
  },
  _resetMock: function resetMock(audio) {
    audio._mock = Object.assign(
      ...global.window.HTMLMediaElement.prototype._mock,
    )
  },
}


Object.defineProperty(global.window.HTMLMediaElement.prototype, 'paused', {
  get() {
    return this._mock.paused
  },
})


Object.defineProperty(global.window.HTMLMediaElement.prototype, 'duration', {
  get() {
    return this._mock.duration
  },
  set(value) {
    this._mock._resetMock(this)
    this._mock.duration = value
  },
})


global.window.HTMLMediaElement.prototype.play = function playMock() {
  if (!this._mock._loaded) {
    this._mock._load(this)
  }
  this._mock.paused = false
  this.dispatchEvent(new Event('play'))
}


global.window.HTMLMediaElement.prototype.pause = function pauseMock() {
  this._mock.paused = true
  this.dispatchEvent(new Event('pause'))
}
