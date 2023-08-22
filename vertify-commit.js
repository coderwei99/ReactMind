import { readFileSync } from 'node:fs'
import path from 'node:path'
import { log } from 'baiwusanyu-utils'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE
  = /^(revert: )?(update|optimizate|feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  log('error', '请遵守commit规范,详情请见 https://www.conventionalcommits.org/en/v1.0.0/')
  log(
    'error',
    'update|optimizate|feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release',
  )
  // eslint-disable-next-line n/prefer-global/process
  process.exit(1)
}
