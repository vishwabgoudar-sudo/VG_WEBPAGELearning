import { expect } from 'chai';
import { LearningModel } from '../../../src/models/learning.model';

describe('LearningModel', () => {
  it('returns full-stack content with all three learning levels per topic', () => {
    const sections = LearningModel.getFullStackSections();

    expect(sections.length).to.be.greaterThan(0);
    expect(sections.every((section) => ['beginner', 'intermediate', 'advanced'].includes(section.level))).to.equal(true);

    const byTopic = new Map<string, Set<string>>();
    sections.forEach((section) => {
      const set = byTopic.get(section.section) ?? new Set<string>();
      set.add(section.level);
      byTopic.set(section.section, set);
    });

    byTopic.forEach((levels) => {
      expect([...levels].sort()).to.deep.equal(['advanced', 'beginner', 'intermediate']);
    });
  });
});
