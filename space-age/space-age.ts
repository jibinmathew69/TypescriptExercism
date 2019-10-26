class SpaceAge{
    private _seconds: number
    private _earth: number

    private planets: {[id: string]: number} = {
        "Mercury": 0.2408467,
        "Venus": 0.61519726,
        "Mars": 1.8808158,
        "Jupiter": 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132,
    }

    constructor(seconds: number) {
        this._seconds = seconds
        this._earth = (this._seconds * 31.69) / 1_000_000_000 

        for(let planet in this.planets){
            let func = "on"+planet
            Object.assign(this, {
                [func]: (): number => {
                    return Number((this._earth/this.planets[planet]).toFixed(2))
                }
            })
        }
    }

    public onEarth(): number{
        return this._earth
    }

    get seconds(): number{
        return this._seconds
    }

}

let s = new SpaceAge(189839836)
export default SpaceAge