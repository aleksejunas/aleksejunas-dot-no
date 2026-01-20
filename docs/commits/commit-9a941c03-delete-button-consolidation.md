feat: consolidate delete blog post buttons into unified DeletePostButton component

## Summary
This commit addresses the confusion caused by having 3 different delete implementations by consolidating them into a single, flexible DeletePostButton component that supports both ActionButton styling and traditional text buttons.

## Changes Made

### 1. Enhanced DeletePostButton Component (`src/components/buttons/DeletePostButton.tsx`)
- Added support for ActionButton styling via `useActionButtonStyle` prop
- Maintained existing confirmation dialog functionality
- Supports both prominent (ActionButton) and subtle (text) button styles
- Fixed action prop usage to work with server actions properly

### 2. Cleaned Up Blog Post Page (`src/app/blog/[slug]/page.tsx`)
- **Removed 3 duplicate delete buttons** that were causing confusion
- Consolidated to single DeletePostButton with proper action usage
- Fixed admin section logic to only show edit/delete for logged-in admins
- Removed unused imports and functions

### 3. Updated Admin Blog Page (`src/app/admin/blog/page.tsx`)
- Replaced raw form with consistent DeletePostButton component
- Used subtle button style for better fit in list view
- Removed unused `handleDelete` function
- Added proper DeletePostButton import

## Technical Details

### Before (Problematic)
- 3 different delete implementations on blog post page
- Inconsistent button styling and behavior
- Wrong action prop usage (using `deletePost` instead of `deletePostAction`)
- No confirmation dialogs on some delete buttons

### After (Improved)
- Single DeletePostButton component handles all cases
- Consistent confirmation dialogs on all delete operations
- Flexible styling: `useActionButtonStyle={true}` for prominent buttons, `useActionButtonStyle={false}` for subtle buttons
- Proper server action usage throughout

## Usage Examples

```jsx
// Prominent delete button (admin pages, main actions)
<DeletePostButton postId={post.id} action={deletePostAction} useActionButtonStyle={true} />

// Subtle delete button (lists, inline actions)
<DeletePostButton postId={post.id} action={deletePostAction} useActionButtonStyle={false} />
```

## Benefits
✅ Consistent UI/UX across all delete operations
✅ Single source of truth for delete functionality
✅ Proper confirmation dialogs prevent accidental deletions
✅ Flexible styling options for different contexts
✅ Cleaner, more maintainable code
✅ Fixed TypeScript warnings about unused variables

## Files Modified
- `src/components/buttons/DeletePostButton.tsx` - Enhanced component
- `src/app/blog/[slug]/page.tsx` - Cleaned up duplicate buttons
- `src/app/admin/blog/page.tsx` - Updated to use DeletePostButton
- `docs/project-map.md` - Added documentation of changes

## Testing
- Code compiles without errors
- ESLint passes with only 3 remaining warnings (unrelated to this change)
- Component supports both styling modes
- All delete operations maintain confirmation dialogs

## Related Issues
This addresses the user's concern about having "3 functions/buttons to delete blog-posts" and not being able to figure out which are which.

## Future Considerations
- Consider adding a loading state to DeletePostButton for better UX during deletion
- Could add a success toast notification after deletion
- Might want to add analytics tracking for delete operations