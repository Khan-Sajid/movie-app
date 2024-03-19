export interface SearchMoviePayload {
  query: string;
  lang?: string;
  include_adult?: "true" | "false";
  page?: number;
  primary_release_year?: string;
  region?: string;
  year?: string;
}
