export class MovieModel {
    public adult: boolean = false;
    public backdrop_path: string = '';
    public genres: Array<any> = [];
    public homepage: string = '';
    public id: number = 0;
    public imdb_id: string = '';
    public original_language: string = '';
    public original_title: string = '';
    public overview: string = '';
    public popularity: number = 0;
    public poster_path: string = '';
    public production_companies: Array<any> = [];
    public production_countries: Array<any> = [];
    public release_date: string = '';
    public revenue: number = 0;
    public runtime: number = 0;
    public spoken_languages: Array<any> = [];
    public status: string = '';
    public tagline: string = '';
    public title: string = '';
    public name: string = '';
    public video!: boolean;
    public vote_average: number = 0;
    public vote_count: number = 0;
  }