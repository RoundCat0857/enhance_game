const maps = {
  1: {
    "field": [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,32,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
    "collision": [],
    "start": []
  },
  2: {
    "field": [[127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
              [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
              [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
              [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
              [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
              [127,127,127,127,127,156,157,157,157,157,157,158,127,127,127,127,127],
              [127,127,127,127,127,186,187,187,187,187,187,188,127,127,127,127,127],
              [127,127,127,127,127,186,187,187,187,187,187,188,127,127,127,127,127],
              [127,127,127,127,127,186,187,187,187,187,187,188,127,127,127,127,127],
              [127,127,127,127,127,186,187,187,187,187,187,188,127,127,127,127,127],
              [127,127,127,127,127,186,187,187,187,187,187,188,127,127,127,127,127],
              [127,127,127,127,127,216,217,217,217,217,217,218,127,127,127,127,127],
              [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
              [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
              [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
              [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
              [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127]],
    "object": [[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1,383,383, -1,383,383, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1,383, 28, -1, -1, -1, 29,383, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1,383, -1, -1, -1, -1, -1,383, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1,447, -1,447, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1,477, -1,477, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
               [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]],
    "collision": [[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  9,  9,  9,  9,  9,  9,  9,  9,  9,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  9,  0,  2,  2,  0,  2,  2,  0,  9,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  9,  2,  0,  0,  0,  0,  0,  2,  9,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  9,  2,  0,  0,  0,  0,  0,  2,  9,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  9,  0,  0,  1,  0,  1,  0,  0,  9,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  9,  9,  9,  9,  9,  9,  9,  9,  9,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
    "start": [7,10],
    "next": [5,5],
    "back": [4,16]
  }
}
